import { exit } from 'process';
import dbConnect from '../dbConnect.mjs';
import galleryModel from '../models/gallery.model.mjs';
import authorModel from '../models/author.model.mjs';
import imageModel from '../models/image.model.mjs';
import fs from 'fs'

// Database Connection
await dbConnect();

// Load Seedfile
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const galleries = loadJSON('./seedfile.json');

// Simulate Write
const simultateWrite = false;

// Creating Gallery Models
for (const gallery of galleries) {

    const { title, year, authors } = gallery;

    const model = { 
        "name" : title, 
        "year" : year
    }

    let createGallery = simultateWrite ? model :  await galleryModel.create(model);

    // Creating Author Models
    for (const elem of authors) {

        const { author, gallery, niceUrl, folder, images } = elem;
    
        let newAuthorModel = { 
            "author" : author, 
            "gallery" : gallery,
            "niceUrl" : niceUrl,
            "folder" : folder,
        }

      
        let createAuthor = simultateWrite ? newAuthorModel : await authorModel.create(newAuthorModel);
    
        // Creating Image Models
        for (const img of images) {
            let newImageModel = { 
                ...img
            }
        
            let createImage = simultateWrite ? newImageModel : await imageModel.create(newImageModel);
        }   

    }
  

  
}

console.log('----------------------')
console.log('Database Oprettet\n')
console.log('Tjek din mongodb database i Compass:', process.env.MONGODB_URI)
console.log('\nForventet indhold er 3 collections: galleries, authors, images')
console.log('----------------------')

exit();