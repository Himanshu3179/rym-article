import Featured from "@/components/Featured";
import RecentArticles from "@/components/RecentArticles";

export default async function Home() {

  return (
    <div className="pt-5 pb-10 flex flex-col gap-10">
      <Featured />
      <RecentArticles />
    </div>
  );
}
