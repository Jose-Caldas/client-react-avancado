import * as S from "./styles";
import Heading from "../Heading";
import TextField from "../TextField";
import Button from "../Button";

const FormProfile = () => (
    <>
        <Heading lineBottom color="black" size="small">
            My profile
        </Heading>
        <S.Form>
            <TextField
                label="Name"
                name="name"
                placeholder="Name"
                inicialValue="Jrcaldas"
            />
            <TextField
                label="E-mail"
                name="email"
                type="email"
                placeholder="E-mail"
                inicialValue="jrcaldas@gmail.com"
                disabled
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                placeholder="Type your password"
            />
            <TextField
                label="New password"
                name="new_password"
                type="password"
                placeholder="New password"
            />
            <Button size="large">Save</Button>
        </S.Form>
    </>
);

export default FormProfile;
