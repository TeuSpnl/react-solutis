import Image from '../models/image'

export default {
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    },

    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:5555/uploads/${image.path}`,
        };
    },
}