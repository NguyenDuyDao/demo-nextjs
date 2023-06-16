import AxiosClient, { instance } from "@/src/client/AxiosClient";
import { getSession } from "next-auth/react";
import getConfig from "next/config";
import { NextAuthProvider } from "../next-auth-provider";
import TenantDialog from "./components/tenantDialog";
import { GetServerSidePropsContext } from "next";

// const Tenant = ({ tenants, LUZ_ADMIN_BASE_URL }: any) => {
const Tenant = (props: { tenants: any, LUZ_ADMIN_BASE_URL: any }) => {
  return (
    <NextAuthProvider>
      <TenantDialog tenants={props.tenants} LUZ_ADMIN_BASE_URL={props.LUZ_ADMIN_BASE_URL} />
    </NextAuthProvider>
  )
}

export async function getServerSideProps(context: any) {
  const session: any = await getSession(context);
  const { serverRuntimeConfig } = getConfig();
  console.log("_______________ check session: ", session);
  debugger
  

  if (session?.genericToken) {
    
    const response: any = await AxiosClient.getRequest(`/${session.user?.email}/tenants`, {
      headers: {
        "Authorization": `Bearer ${session.genericToken}`
      }
    })
    return {
      props: {
        tenants: response.data,
        LUZ_ADMIN_BASE_URL: serverRuntimeConfig.NEXT_PUBLIC_LUZ_ADMIN_BASE_URL
      }
    }
  }
  return {
    props: {
      tenants: [],
      LUZ_ADMIN_BASE_URL: serverRuntimeConfig.NEXT_PUBLIC_LUZ_ADMIN_BASE_URL
    }
  }
}

export default Tenant