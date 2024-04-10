import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

export type Pix = {
  qr_code: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pix>,
) {
  const docRef = doc(db, "payment_methods", "pix");
  const response = await getDoc(docRef);
  let pix: Pix;
  if (response.exists()) {
    pix = response.data() as Pix;
    res.status(200).json(pix);
  }
}
