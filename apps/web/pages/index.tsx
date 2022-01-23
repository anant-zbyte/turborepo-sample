import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <p>{process.env.NEXT_PUBLIC_SECRET}</p>
      <Button />
    </div>
  );
}
