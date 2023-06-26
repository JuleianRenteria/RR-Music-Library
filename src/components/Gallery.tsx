import GalleryItem from './GalleryItem'
import { GalleryItemPropsItem } from './GalleryItem'

interface GalleryProps {
    data: GalleryItemPropsItem[]
}

function Gallery(props: GalleryProps){

    const display = props.data.map((item: GalleryItemPropsItem, index: number) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
