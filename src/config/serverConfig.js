const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.PORT,

    WEBSITE_URL:process.env.WEBSITE_URL,

    INPUT_TAG_CLASS_NAME:process.env.INPUT_TAG_CLASS_NAME,
    INPUT_TAG_VALUE:process.env.INPUT_TAG_VALUE,

    WBTC_BUTTON_TEXT:process.env.WBTC_BUTTON_TEXT,
    WBTC_INPUT_TAG_VALUE:process.env.WBTC_INPUT_TAG_VALUE,
    WBTC_DIV_TAG_VALUE:process.env.WBTC_DIV_TAG_VALUE,

    USDC_BUTTON_TEXT:process.env.USDC_BUTTON_TEXT,
    USDC_INPUT_TAG_VALUE:process.env.USDC_INPUT_TAG_VALUE,
    USDC_DIV_TAG_VALUE:process.env.USDC_DIV_TAG_VALUE,


}