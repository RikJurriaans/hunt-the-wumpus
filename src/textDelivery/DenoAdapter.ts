import type DeliveryMechanism from "./DeliveryMechanism.js";

export default class DenoIO implements DeliveryMechanism {
  prompt(question: string): string {
    return prompt(question);
  }

  deliver(text: string): void {
    console.log(text);
  }

  exit(): void {
    Deno.exit(0);
  }
}
