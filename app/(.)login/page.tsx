import { AccountForm } from "@/components/auth/account-form";
import { Modal } from "@/components/modal";

function Login() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Modal>
        <AccountForm />
      </Modal>
    </div>
  );
}
export default Login;
