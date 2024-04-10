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
  if (response.exists()) {
    const pix = response.data().qr_code;
    res.status(200).json({ qr_code: pix });
  } else {
    res.status(200).json({ qr_code: "" });
  }
}
