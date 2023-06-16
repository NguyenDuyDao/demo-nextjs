"use client";

import AxiosClient, { instance } from "@/src/client/AxiosClient";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const TenantDialog = ({ tenants, LUZ_ADMIN_BASE_URL }: any) => {
    const { data: session, status }: any = useSession();
    const router = useRouter();
    // const [isLoading, setLoading] = useState(false);
  
    const onHandleSelectTenant = (event: any) => {
      // setLoading(true);
      instance.defaults.baseURL = LUZ_ADMIN_BASE_URL
      AxiosClient.postRequest(`/${event.target.id}/tokens`, { token: session.refreshToken }, {
        headers: {
          'Content-type': "application/x-www-form-urlencoded"
        }
      }).then(res => {
        if (res.status === 200) {
          router.push("/")
        } else {
          router.push('/maintenance')
        }
        // setLoading(false);
      })
    }
  
    const onHandleSignOut = async (event: React.MouseEvent) => {
      try {
        instance.defaults.baseURL = LUZ_ADMIN_BASE_URL
        await signOut({ callbackUrl: '/api/auth/logout' });
        await AxiosClient.getRequest("/log-out");
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  
    console.log("check session: ", session);
    console.log("check status: ", status);
    console.log("check tenants: ", tenants);
    console.log("check LUZ_ADMIN_BASE_URL: ", LUZ_ADMIN_BASE_URL);
    console.log("___________________________________");
    
    // debugger
  
    if (status === "unauthenticated") {
      signIn('keycloak');
      return null;
    } else {
      return <div className="container" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width:"400px", paddingTop: "15px" }}>
          {/* <LoadingOverlay  active={isLoading} spinner styles={{ wrapper: {overflow: 'hidden'}}}>
            <Table>
              <thead></thead>
              <tbody style={{display: "block", maxHeight: "500px", overflowY: "scroll"}}>
                {tenants.map(tenant => {
                  return (tenant.companyName && <tr key={tenant.tenantId}><td onClick={onHandleSelectTenant} id={tenant.tenantId}>{tenant.companyName}</td></tr>)
                })}
              </tbody>
            </Table>
            <div style={{width: "100%", textAlign:"center", paddingBottom: "15px"}}><Button onClick={onHandleSignOut}>Sign out</Button></div>
          </LoadingOverlay> */}
      </div>
    }
}

export default TenantDialog
