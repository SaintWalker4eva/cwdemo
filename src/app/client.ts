import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
 
const clientId = createThirdwebClient({
  secretKey: "<IJrKOcrsFvTfCNdSyUj1tPJQ4ZaFGZLWcyS3FWvy-YyA4YglLBk28VFvQQXBVnjHkRzbFhSvMZaSjZyEKVdREg>",
});


if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: "<IJrKOcrsFvTfCNdSyUj1tPJQ4ZaFGZLWcyS3FWvy-YyA4YglLBk28VFvQQXBVnjHkRzbFhSvMZaSjZyEKVdREg>",
});
