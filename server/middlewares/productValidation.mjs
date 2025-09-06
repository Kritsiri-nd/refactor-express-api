export const validationProduct = (req, res, next) => {
  const { name, price, image, description, category } = req.body;
  const result = [];
  if (typeof name !== "string" || name.trim() === "") {
    result.push("name: ต้องเป็น string และไม่ใช่ string ว่าง");
  }
  let numericPrice = price;
  if (typeof numericPrice === "string" && numericPrice.trim() !== "" && !isNaN(Number(numericPrice))) {
    numericPrice = Number(numericPrice);
    req.body.price = numericPrice; 
  }
  if (typeof req.body.price !== "number" || !(req.body.price > 0)) {
    result.push("price: ต้องเป็น number และมากกว่า 0");
  }
  if (typeof image !== "string" || image.trim() === "") {
    result.push("image: ต้องเป็น string และไม่ใช่ string ว่าง");
  }
  if (typeof description !== "string" || description.trim() === "" || description.trim().length < 10) {
    result.push(
      "description: ต้องเป็น string, ไม่ใช่ string ว่าง, และมีความยาวอย่างน้อย 10 ตัวอักษร"
    );
  }
  if (typeof category !== "string" || category.trim() === "") {
    result.push("category: ต้องเป็น string และไม่ใช่ string ว่าง");
  }
  if (result.length > 0) {
    return res.status(400).json({
      message: result.join(";"),
    });
  }
  next();
};
