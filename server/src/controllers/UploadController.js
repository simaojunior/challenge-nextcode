import upload from '../config/multer';

export default {
	upload: async (req, res) => {
		return upload(req, res, error => {
			if (error) {
				return res
					.status(400)
					.json({ message: 'Only .jpeg or .png files are accepted' });
			}
			// imageBase64 = req.file.buffer.toString('base64');
			return res.json(req.file.buffer.toString('base64'));
		});
	},
};
