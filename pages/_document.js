import Document, {Head,Html,NextScript,Main} from 'next/document'

class CustomDocument extends  Document{
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }
      render(){
          return(
              <Html>
                  <Head>
                      {/* <link src="google.com"></link> */}
                      {/* <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                      <link href="https://fonts.googleapis.com/css2?family=Cookie&family=Open+Sans&family=Poppins:ital,wght@1,300&family=Raleway&family=Roboto&display=swap" rel="stylesheet"> </link> */}
                  </Head>
                  <body>
                      <Main>

                      </Main>
                      <NextScript/>
                  </body>
              </Html>
          )
      }
}

export default CustomDocument