import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";

type Props = {
  children: React.ReactNode; // Типизация для children
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <AppBar />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
