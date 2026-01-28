import { StackServer } from "@stackframe/stack/next";

export const stack = new StackServer({
  projectId: "711b5446-6d5f-43b4-818c-a4bdaae08ee5",
  publishableClientKey: "pck_ze6nvsj21rff6nnpn4namg5vavk1jt3sf6kgggetvn1cr",
  secretServerKey: "ssk_b1nfy3713bc8h1mbrhkkfxpfayy6g1k8je6t5j0zx4ga8",
  // Add these specific URLs for your Neon Auth integration
  urls: {
    authBaseUrl: "https://ep-young-base-a1rjs4vu.neonauth.ap-southeast-1.aws.neon.tech/neondb/auth",
  }
});