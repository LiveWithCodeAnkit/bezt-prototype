import { useRouter } from "next/navigation";
import { userSchema } from "../schema/userSchema";
interface Props {
  firstName: string;
  lastName: string;
  pinCode: string;
  email: string;
}

export const useYourSelf = () => {
  const router = useRouter();
  const initialValues: Props = {
    firstName: "",
    lastName: "",
    pinCode: "",
    email: "",
  };

  const handleYourSelf = (values: Props) => {
    router.push("/pwa/about-us");
  };
  return {
    initialValues,
    handleYourSelf,
    schema: userSchema,
  };
};
