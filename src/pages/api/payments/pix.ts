import type { NextApiRequest, NextApiResponse } from "next";
import {
  DocumentData,
  DocumentSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase-config";

export type Pix = {
  qr_code: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pix>,
) {
  const docRef = doc(db, "payment_methods", "pix");
  await getDoc(docRef)
    .then((doc: DocumentSnapshot<DocumentData>) => {
      res.status(200).json(doc.data() as Pix);
    })
    .catch((error) => {
      console.log(error);
      res.status(404);
    });
}
