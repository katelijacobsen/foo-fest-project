import { postSub } from "@/lib/supabase";
import Button from "@/components/global/buttonFolder/PrimaryButton";
import { revalidatePath } from "next/cache";

const Newsletter = () => {
  async function postingSub(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    await postSub(data);

    revalidatePath("/");
  }
  return (
    <form className="flex flex-col gap-5 items-center " action={postingSub}>
      <div className="flex flex-col  text-customWhite ">
        <label htmlFor="name">Navn</label>
        <input className="bg-customBlack_4 p-2 min-w-64 sm:min-w-96 " autoComplete="given-name" required placeholder="Navn" type="text" id="name" name="name" />
      </div>
      <div className="flex flex-col  text-customWhite">
        <label htmlFor="email">E-mail</label>
        <input className="bg-customBlack_4 p-2 min-w-64 sm:min-w-96" autoComplete="email" required placeholder="E-mail" type="email" id="email" name="email" />
      </div>
      <Button color="bg-customBlack_3" buttonContent="Tilmeld"></Button>
    </form>
  );
};

export default Newsletter;
