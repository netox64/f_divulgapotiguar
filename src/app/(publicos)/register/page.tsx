import { FormRegister } from "@/components/Forms";

export default function Register() {
    return (
        <div className="w-full  h-screen flex flex-col items-center">
            <h1 className="text-2xl my-12">Register</h1>
            <FormRegister />
        </div>
    );
}