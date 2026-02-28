const AliraMaps = ({ mapUrl }: { mapUrl: string }) => {
  return (
    <div className="w-full overflow-hidden mt-10 -mb-10">
        <div className="relative lg:pb-[25.75%] pb-[56.25%]">
            <iframe src={mapUrl} className="absolute inset-0 w-full h-[50vh]" loading="lazy" title="Location    "/>
        </div>
    </div>
  )
}

export default AliraMaps