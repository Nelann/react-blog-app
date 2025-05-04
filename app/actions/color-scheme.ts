import { data } from "react-router";
import { schema, setColorScheme } from "~/services/color-schema-cookie";
import type { Route } from "./+types/color-scheme";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const colorScheme = schema.parse(formData.get("color-scheme"));

  const headers = new Headers();
  headers.append("Set-Cookie", await setColorScheme(colorScheme as string));

  return data(null, { headers });
}
