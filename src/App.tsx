import { Button } from "./components/Button";

export function App() {
  return (
    <main className="p-20 flex gap-6">
      <Button>Create Account</Button>
      <Button asChild>
        <a href="http://www.globo.com">Site da Globo</a>
      </Button>
    </main>
  );
}
