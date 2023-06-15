import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Repo = {
  name: string
  stargazers_count: number
}
 
export const getServerSideProps: GetServerSideProps<{
  repo: Repo
}> = async () => {
    console.log("_______________jsasasmjmjmjmj");
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  console.log(repo);
  
  return { props: { repo } }
}
 
export default function Tenant({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    
  return <div></div>
}