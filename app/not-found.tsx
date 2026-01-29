import GeneralRedirector from "@/components/GeneralRedirector";

function NotFound() {
  return (
    <GeneralRedirector
      href="/"
      redirectMsg="return to homepage"
      message="page not found"
    />
  );
}

export default NotFound;
