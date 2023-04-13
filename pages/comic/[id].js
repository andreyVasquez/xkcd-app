import { useRouter } from "next/router";

export default function Comic() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      comic: {id}
      <style jsx>{``}</style>
    </>
  );
}
