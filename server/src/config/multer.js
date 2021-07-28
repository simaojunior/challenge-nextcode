import multer from 'multer';

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
	const alowedMimeTypes = ['image/jpeg', 'image/png'];
	if (alowedMimeTypes.includes(file.mimetype)) {
		return cb(null, true);
	}
	return cb(new Error('Only .jpeg or .png files are accepted'));
};
const upload = multer({ storage, fileFilter }).single('image');

export default upload;
