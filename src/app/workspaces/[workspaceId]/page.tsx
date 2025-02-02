import { redirect } from "next/navigation";

const page = async ({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) => {
  const { workspaceId } = await params;

  // TODO: fetch workspace data here using the workspaceId
  // const workspace = ""

  // if (!workspace && !workspaceId) redirect("/workspaces")

  if (!workspaceId) redirect("/workspaces");

  redirect(`/workspaces/${workspaceId}/create-ticket`);
};

export default page;
