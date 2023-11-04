import type DeliveryMechanism from "./DeliveryMechanism.ts";

export default class DenoIO implements DeliveryMechanism {
  deliver(text: string): void {
    console.log(text);
  }
}
