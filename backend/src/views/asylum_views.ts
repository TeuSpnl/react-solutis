import Asylum from '../models/asylumTable'
import ImagesView from './images_view'

export default {
    renderMany(asylums: Asylum[]) {
        return asylums.map(asylum => this.render(asylum));
    },

    render(asylum: Asylum) {
        return {
            id: asylum.id,
            name: asylum.name,
            longitude: asylum.longitude,
            latitude: asylum.latitude,
            opening_hours: asylum.opening_hours,
            telephone: asylum.telephone,
            whatsapp: asylum.whatsapp,
            address: asylum.address,
            necessities: asylum.necessities,
            images: ImagesView.renderMany(asylum.images)
        };
    },
}