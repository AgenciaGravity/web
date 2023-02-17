// Models
const { CountServicesPdf } = require("../models/countServicesPdf.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const pushCount = catchAsync(async (req, res, next) => {
  const count = await CountServicesPdf.findOne({ where: { id: 1 } });

  if (!count) {
    await CountServicesPdf.create({
      count: 1,
    });

    return res.status(201).json({
      status: "success",
    });
  }

  await productInCart.update({ count: +count.count + 1 });

  res.status(201).json({
    status: "success",
  });
});

module.exports = {
  pushCount,
};
