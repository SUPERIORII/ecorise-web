import "@/app/globals.css"

export const metadata = {
    title: "Ecorise Global Initiative",
    description: "An Eco and healthy environment website"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body className="bg-gray-100">
        <div>{children}</div>

        </body>
    </html>
  )
}

export default RootLayout