import React, { useEffect } from 'react'
import Layout from '../../layout/layout'


const DashboardPage = () => {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://10ay.online.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <Layout pageInfo={{ name: "Your Dashboard", desc: "" }}>
      <div className="app-main-layout-content">
        <div className="page-tabs-content">
          <div className="section">
            <div className="html-embed w-embed w-script">
              <div className="tableauPlaceholder">
                <object className="tableauViz" width="100%" height="100%" >
                  <param name="host_url" value="https%3A%2F%2F10ay.online.tableau.com%2F" />
                  <param name="embed_code_version" value="3" />
                  <param name="site_root" value="&#47;t&#47;mymomentumintelligence" />
                  <param name="name" value="BrandIndex-Accountingportal&#47;Funnel" />
                  <param name="tabs" value="no" />
                  <param name="toolbar" value="no" />
                  <param name="showAppBanner" value="false"/>
                </object>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default DashboardPage