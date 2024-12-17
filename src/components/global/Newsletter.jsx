import { postSub } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import Button from "./buttonFolder/PrimaryButton";

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
      <div className="flex flex-col  text-customWhite">
        <label className="font-bold" htmlFor="name">
          Navn
        </label>
        <input className="bg-customBlack_4 p-2 min-w-64 sm:min-w-96 " autoComplete="given-name" required placeholder="Navn" type="text" id="name" name="name" />
      </div>
      <div className="flex flex-col  text-customWhite">
        <label className="font-bold" htmlFor="email">
          E-mail
        </label>
        <input className="bg-customBlack_4 p-2 min-w-64 sm:min-w-96" autoComplete="email" required placeholder="E-mail" type="email" id="email" name="email" />
      </div>
      <Button aria_label_text="submit" type="submit" color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Tilmeld" />
    </form>
  );
};

export default Newsletter;
