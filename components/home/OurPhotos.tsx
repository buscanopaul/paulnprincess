import data from "@/mocks/photos.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function OurPhotos() {
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
        <Masonry columnsCount={4} gutter="10px">
          {data.photos.map((photo, i) => (
            <img key={i} src={photo.image} className="w-full block" />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default OurPhotos;
