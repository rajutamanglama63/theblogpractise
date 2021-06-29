const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const blogRoutes = require("./route/blog");
const authRoutes = require("./route/auth");
const artsRoutes = require("./route/arts");
const ecoRoutes = require("./route/economics");
const eduRoutes = require("./route/education");
const litRoutes = require("./route/literature");
const polRoutes = require("./route/politics");
const techRoutes = require("./route/technology");
const tourRoutes = require("./route/tourism");

const app = express();

dotenv.config();
const Port = process.env.PORT || 4000;

connectDB();

app.use(express.json({limit : "30mb"}));

app.use('/blog', blogRoutes);
app.use('/auth', authRoutes);
app.use('/arts', artsRoutes);
app.use('/eco', ecoRoutes);
app.use('/edu', eduRoutes);
app.use('/lit', litRoutes);
app.use('/pol', polRoutes);
app.use('/tech', techRoutes);
app.use('/tour', tourRoutes);

app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}`);
});