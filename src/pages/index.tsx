import Home, { HomeTemplateProps } from "../templates/Home";
import { initializeApollo } from "../utils/apollo";
import { QueryHome, QueryHomeVariables } from "../graphql/generated/QueryHome";
import { QUERY_HOME } from "../graphql/queries/home";
import { bannerMapper, gamesMapper, highlightMapper } from "../utils/mappers";

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();
    const Today = new Date().toISOString().slice(0, 10); // 2021-07-25

    const {
        data: { banners, newGames, upcomingGames, freeGames, sections },
    } = await apolloClient.query<QueryHome, QueryHomeVariables>({
        query: QUERY_HOME,
        variables: { date: Today },
        fetchPolicy: "no-cache", // garantir sempre dado novo na geração do estático
    });

    return {
        revalidate: 10, // a cada 10 segundos renova a página/ faz nova chamada ao servidor
        props: {
            banners: bannerMapper(banners),

            newGamesTitle: sections?.newGames?.title,
            newGames: gamesMapper(newGames),

            mostPopularGamesTitle: sections?.popularGames?.title,
            mostPopularHighlight: highlightMapper(
                sections?.popularGames?.highlight
            ),
            mostPopularGames: gamesMapper(sections!.popularGames!.games),

            upcomingGamesTitle: sections?.upcomingGames?.title,
            upcommingGames: gamesMapper(upcomingGames),
            upcommingHighlight: highlightMapper(
                sections?.upcomingGames?.highlight
            ),

            freeGamesTitle: sections?.freeGames?.title,
            freeGames: gamesMapper(freeGames),
            freeHighlight: highlightMapper(sections?.freeGames?.highlight),
        },
    };
}
