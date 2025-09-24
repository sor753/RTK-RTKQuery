export type RecipeResponse = {
  from: number
  to: number
  count: number
  hits: {
    recipe: Recipe
  }[]
}

type Image = {
  url: string
  width: number
  height: number
}

export type Recipe = {
  uri: string
  label: string
  image: string
  images: {
    THUMBNAIL: Image
    SMALL: Image
    REGULAR: Image
    LARGE: Image
  }
  source: string
  url: string
  calories: number
}

// "recipe": {
//                 "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_de231e926a449c58126ad3410fa72612",
//                 "label": "Coffee",
//                 "image": "https://example.com",
//                 "images": {
//                     "THUMBNAIL": {
//                         "url": "https://example.com"
//                         "width": 100,
//                         "height": 100
//                     },
//                     "SMALL": {
//                         "url": "https://example.com",
//                         "width": 200,
//                         "height": 200
//                     },
//                     "REGULAR": {
//                         "url": "https://example.com",
//                         "width": 300,
//                         "height": 300
//                     },
//                     "LARGE": {
//                         "url": "https://example.com",
//                         "width": 600,
//                         "height": 600
//                     }
//                 },
//                 "source": "edamam.com",
//                 "url": "https://data.edamam.com/recipes/coffee",
//                 "shareAs": "http://www.edamam.com/recipe/coffee-de231e926a449c58126ad3410fa72612/coffee",
//                 "yield": 1.0,
//                 "dietLabels": [
//                     "Low-Fat",
//                     "Low-Sodium"
//                 ],
//                 "healthLabels": [
//                     "Kidney-Friendly",
//                     "Vegan",
//                     "Vegetarian",
//                     "Pescatarian",
//                     "Paleo",
//                     "DASH",
//                     "Dairy-Free",
//                     "Gluten-Free",
//                     "Wheat-Free",
//                     "Egg-Free",
//                     "Peanut-Free",
//                     "Tree-Nut-Free",
//                     "Soy-Free",
//                     "Fish-Free",
//                     "Shellfish-Free",
//                     "Pork-Free",
//                     "Red-Meat-Free",
//                     "Crustacean-Free",
//                     "Celery-Free",
//                     "Mustard-Free",
//                     "Sesame-Free",
//                     "Lupine-Free",
//                     "Mollusk-Free",
//                     "Alcohol-Free",
//                     "No oil added",
//                     "Sulfite-Free",
//                     "Kosher"
//                 ],
//                 "cautions": [
//                     "Sulfites"
//                 ],
//                 "ingredientLines": [
//                     "12 fluid ounces Coffee, regular",
//                     "3 teaspoons Agave nectar"
//                 ],
//                 "ingredients": [
//                     {
//                         "text": "12 fluid ounces Coffee, regular",
//                         "quantity": 12.0,
//                         "measure": "fluid ounce",
//                         "food": "Coffee",
//                         "weight": 355.20000000000005,
//                         "foodCategory": "coffee and tea",
//                         "foodId": "food_ax0a0yxbbe4hx0apiz1tla01s2w7",
//                         "image": "https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg"
//                     },
//                     {
//                         "text": "3 teaspoons Agave nectar",
//                         "quantity": 3.0,
//                         "measure": "teaspoon",
//                         "food": "Agave nectar",
//                         "weight": 20.800000002,
//                         "foodCategory": "sugar syrups",
//                         "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
//                         "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
//                     }
//                 ],
//                 "calories": 63.04000000572,
//                 "totalWeight": 376.00000000200004,
//                 "totalTime": 10.0,
//                 "cuisineType": [
//                     "american"
//                 ],
//                 "mealType": [
//                     "lunch/dinner"
//                 ],
//                 "dishType": [
//                     "drinks"
//                 ],
//                 "totalNutrients": {
//                     "ENERC_KCAL": {
//                         "label": "Energy",
//                         "quantity": 63.04000000572,
//                         "unit": "kcal"
//                     },
//                     "FAT": {
//                         "label": "Fat",
//                         "quantity": 0.07104,
//                         "unit": "g"
//                     },
//                     "FASAT": {
//                         "label": "Saturated",
//                         "quantity": 0.007104000000000001,
//                         "unit": "g"
//                     },
//                     "FATRN": {
//                         "label": "Trans",
//                         "quantity": 0.0,
//                         "unit": "g"
//                     },
//                     "FAMS": {
//                         "label": "Monounsaturated",
//                         "quantity": 0.0,
//                         "unit": "g"
//                     },
//                     "FAPU": {
//                         "label": "Polyunsaturated",
//                         "quantity": 0.0,
//                         "unit": "g"
//                     },
//                     "CHOCDF": {
//                         "label": "Carbs",
//                         "quantity": 15.808000001520002,
//                         "unit": "g"
//                     },
//                     "CHOCDF.net": {
//                         "label": "Carbohydrates (net)",
//                         "quantity": 14.768000001420003,
//                         "unit": "g"
//                     },
//                     "FIBTG": {
//                         "label": "Fiber",
//                         "quantity": 1.0400000001,
//                         "unit": "g"
//                     },
//                     "SUGAR": {
//                         "label": "Sugars",
//                         "quantity": 14.76800000142,
//                         "unit": "g"
//                     },
//                     "SUGAR.added": {
//                         "label": "Sugars, added",
//                         "quantity": 0.0,
//                         "unit": "g"
//                     },
//                     "PROCNT": {
//                         "label": "Protein",
//                         "quantity": 0.42624000000000006,
//                         "unit": "g"
//                     },
//                     "CHOLE": {
//                         "label": "Cholesterol",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "NA": {
//                         "label": "Sodium",
//                         "quantity": 7.104000000000001,
//                         "unit": "mg"
//                     },
//                     "CA": {
//                         "label": "Calcium",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "MG": {
//                         "label": "Magnesium",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "K": {
//                         "label": "Potassium",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "FE": {
//                         "label": "Iron",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "ZN": {
//                         "label": "Zinc",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "P": {
//                         "label": "Phosphorus",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "VITA_RAE": {
//                         "label": "Vitamin A",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "VITC": {
//                         "label": "Vitamin C",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "THIA": {
//                         "label": "Thiamin (B1)",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "RIBF": {
//                         "label": "Riboflavin (B2)",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "NIA": {
//                         "label": "Niacin (B3)",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "VITB6A": {
//                         "label": "Vitamin B6",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "FOLDFE": {
//                         "label": "Folate equivalent (total)",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "FOLFD": {
//                         "label": "Folate (food)",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "FOLAC": {
//                         "label": "Folic acid",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "VITB12": {
//                         "label": "Vitamin B12",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "VITD": {
//                         "label": "Vitamin D",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "TOCPHA": {
//                         "label": "Vitamin E",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "VITK1": {
//                         "label": "Vitamin K",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "WATER": {
//                         "label": "Water",
//                         "quantity": 0.0,
//                         "unit": "g"
//                     }
//                 },
//                 "totalDaily": {
//                     "ENERC_KCAL": {
//                         "label": "Energy",
//                         "quantity": 3.1520000002860002,
//                         "unit": "%"
//                     },
//                     "FAT": {
//                         "label": "Fat",
//                         "quantity": 0.1092923076923077,
//                         "unit": "%"
//                     },
//                     "FASAT": {
//                         "label": "Saturated",
//                         "quantity": 0.03552000000000001,
//                         "unit": "%"
//                     },
//                     "CHOCDF": {
//                         "label": "Carbs",
//                         "quantity": 5.269333333840001,
//                         "unit": "%"
//                     },
//                     "FIBTG": {
//                         "label": "Fiber",
//                         "quantity": 4.1600000004,
//                         "unit": "%"
//                     },
//                     "PROCNT": {
//                         "label": "Protein",
//                         "quantity": 0.8524800000000002,
//                         "unit": "%"
//                     },
//                     "CHOLE": {
//                         "label": "Cholesterol",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "NA": {
//                         "label": "Sodium",
//                         "quantity": 0.29600000000000004,
//                         "unit": "%"
//                     },
//                     "CA": {
//                         "label": "Calcium",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "MG": {
//                         "label": "Magnesium",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "K": {
//                         "label": "Potassium",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "FE": {
//                         "label": "Iron",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "ZN": {
//                         "label": "Zinc",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "P": {
//                         "label": "Phosphorus",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "VITA_RAE": {
//                         "label": "Vitamin A",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "VITC": {
//                         "label": "Vitamin C",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "THIA": {
//                         "label": "Thiamin (B1)",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "RIBF": {
//                         "label": "Riboflavin (B2)",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "NIA": {
//                         "label": "Niacin (B3)",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "VITB6A": {
//                         "label": "Vitamin B6",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "FOLDFE": {
//                         "label": "Folate equivalent (total)",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "VITB12": {
//                         "label": "Vitamin B12",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "VITD": {
//                         "label": "Vitamin D",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "TOCPHA": {
//                         "label": "Vitamin E",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "VITK1": {
//                         "label": "Vitamin K",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     }
//                 },
//                 "digest": [
//                     {
//                         "label": "Fat",
//                         "tag": "FAT",
//                         "schemaOrgTag": "fatContent",
//                         "total": 0.07104,
//                         "hasRDI": true,
//                         "daily": 0.1092923076923077,
//                         "unit": "g",
//                         "sub": [
//                             {
//                                 "label": "Saturated",
//                                 "tag": "FASAT",
//                                 "schemaOrgTag": "saturatedFatContent",
//                                 "total": 0.007104000000000001,
//                                 "hasRDI": true,
//                                 "daily": 0.03552000000000001,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Trans",
//                                 "tag": "FATRN",
//                                 "schemaOrgTag": "transFatContent",
//                                 "total": 0.0,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Monounsaturated",
//                                 "tag": "FAMS",
//                                 "schemaOrgTag": null,
//                                 "total": 0.0,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Polyunsaturated",
//                                 "tag": "FAPU",
//                                 "schemaOrgTag": null,
//                                 "total": 0.0,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             }
//                         ]
//                     },
//                     {
//                         "label": "Carbs",
//                         "tag": "CHOCDF",
//                         "schemaOrgTag": "carbohydrateContent",
//                         "total": 15.808000001520002,
//                         "hasRDI": true,
//                         "daily": 5.269333333840001,
//                         "unit": "g",
//                         "sub": [
//                             {
//                                 "label": "Carbs (net)",
//                                 "tag": "CHOCDF.net",
//                                 "schemaOrgTag": null,
//                                 "total": 14.768000001420003,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Fiber",
//                                 "tag": "FIBTG",
//                                 "schemaOrgTag": "fiberContent",
//                                 "total": 1.0400000001,
//                                 "hasRDI": true,
//                                 "daily": 4.1600000004,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Sugars",
//                                 "tag": "SUGAR",
//                                 "schemaOrgTag": "sugarContent",
//                                 "total": 14.76800000142,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Sugars, added",
//                                 "tag": "SUGAR.added",
//                                 "schemaOrgTag": null,
//                                 "total": 0.0,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             }
//                         ]
//                     },
//                     {
//                         "label": "Protein",
//                         "tag": "PROCNT",
//                         "schemaOrgTag": "proteinContent",
//                         "total": 0.42624000000000006,
//                         "hasRDI": true,
//                         "daily": 0.8524800000000002,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Cholesterol",
//                         "tag": "CHOLE",
//                         "schemaOrgTag": "cholesterolContent",
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Sodium",
//                         "tag": "NA",
//                         "schemaOrgTag": "sodiumContent",
//                         "total": 7.104000000000001,
//                         "hasRDI": true,
//                         "daily": 0.29600000000000004,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Calcium",
//                         "tag": "CA",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Magnesium",
//                         "tag": "MG",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Potassium",
//                         "tag": "K",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Iron",
//                         "tag": "FE",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Zinc",
//                         "tag": "ZN",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Phosphorus",
//                         "tag": "P",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Vitamin A",
//                         "tag": "VITA_RAE",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Vitamin C",
//                         "tag": "VITC",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Thiamin (B1)",
//                         "tag": "THIA",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Riboflavin (B2)",
//                         "tag": "RIBF",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Niacin (B3)",
//                         "tag": "NIA",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Vitamin B6",
//                         "tag": "VITB6A",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Folate equivalent (total)",
//                         "tag": "FOLDFE",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Folate (food)",
//                         "tag": "FOLFD",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Folic acid",
//                         "tag": "FOLAC",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Vitamin B12",
//                         "tag": "VITB12",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Vitamin D",
//                         "tag": "VITD",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Vitamin E",
//                         "tag": "TOCPHA",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Vitamin K",
//                         "tag": "VITK1",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Sugar alcohols",
//                         "tag": "Sugar.alcohol",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Water",
//                         "tag": "WATER",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     }
//                 ],
//                 "instructionLines": [
//                     "Brew 12 fluid ounces of regular coffee using your preferred method (drip coffee maker, French press, pour-over, etc.).",
//                     "Once the coffee is brewed, pour it into a mug.",
//                     "Add 3 teaspoons of agave nectar to the hot coffee.",
//                     "Stir the coffee and agave nectar together until the agave is completely dissolved.",
//                     "Taste and adjust sweetness if necessary by adding more agave nectar, one teaspoon at a time.",
//                     "Serve the coffee hot and enjoy."
//                 ]
//             },
