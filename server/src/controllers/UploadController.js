import upload from '../config/multer';

export default {
	uploadImage: async (req, res) => {
		return upload(req, res, error => {
			if (error) {
				return res
					.status(400)
					.json({ message: 'Only .jpeg or .png files are accepted' });
			}
			return res.json(req.file.buffer.toString('base64'));
		});
	},
};
