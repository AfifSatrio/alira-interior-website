import JasaAliraHeader from "./JasaAliraHeader"
import LayananSelection from "./LayananSelection"
 
const JasaAlira = () => {
  return (
    <div className="mx-auto py-20 max-w-6xl">
        <div className="mx-5 flex flex-col">
            <JasaAliraHeader />
            <LayananSelection />
        </div>
    </div>
  )
}

export default JasaAlira