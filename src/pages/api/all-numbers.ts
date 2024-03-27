// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

export type OurNumbers = {
  valor: string;
  descricao: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OurNumbers[]>
) {
  const docRef = doc(db, "our_numbers", "nossos_numeros");
  const response = await getDoc(docRef);
  let data: OurNumbers[] = [];
  if (response.exists()) {
    for (let index = 1; index <= 6; index++) {
      const element = response.data()[index];
      data.push(element);
    }
  }
  res.status(200).json(data);
}
