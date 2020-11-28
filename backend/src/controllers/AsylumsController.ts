import { Request, response, Response } from "express";
import { getRepository } from "typeorm";
import AsylumView from '../views/asylum_views'
import * as yup from 'yup';

import Asylums from "../models/asylumTable";

export default {
    async index(req: Request, res: Response) {
      const asylumRep = getRepository(Asylums);

      const asylums = await asylumRep.find({
        relations:['images']
      });

      return res.json(AsylumView.renderMany(asylums));
    },

    async show(req: Request, res: Response) {
      const { id } = req.params;

      const asylumRep = getRepository(Asylums);

      const asylum = await asylumRep.findOneOrFail(id, {
        relations:['images']
      });

      return res.json(AsylumView.render(asylum));
    },

  async create(req: Request, res: Response) {
    const {
      name,
      longitude,
      latitude,
      opening_hours,
      telephone,
      whatsapp,
      address,
      necessities,
    } = req.body;

    const asylumRep = getRepository(Asylums);

    const reqImg= req.files as Express.Multer.File[];
    const images = reqImg.map(image => {
      return { path: image.filename }
    })

    const data ={
      name,
      longitude,
      latitude,
      opening_hours,
      telephone,
      whatsapp,
      address,
      necessities,
      images
    }

    const schema = yup.object().shape({
      name: yup.string().required(),
      longitude: yup.number().required(),
      latitude: yup.number().required(),
      opening_hours: yup.string().required(),
      telephone: yup.number().required().max(15),
      whatsapp: yup.number().required().max(15),
      address: yup.string().required(),
      necessities: yup.string(),
      images: yup.array(
        yup.object().shape({
          path: yup.string().required()
        })
      )
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const asylum = asylumRep.create(data);

    await asylumRep.save(asylum);

    return res.status(201).json(asylum);
  },
};

