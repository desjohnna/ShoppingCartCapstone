CREATE database shopping_cart

INSERT INTO products
    (id, name, price, is_Domestic, category, image_url, description)
VALUES
(1, "Children's Book", 12.49, true, "books", "https://www.scholastic.com/content5/media/products/28/9780545619028_mres.jpg", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),
(2, "Cooking Songs", 14.99, true, "music", "https://img.discogs.com/dvkaYtXgIZ_lUcovcDMI8FgdJiE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8939998-1471880684-6713.jpeg.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
(3, "Chocolate Bar", 0.85, true, "food", "https://images.unsplash.com/photo-1511381878266-349693efb20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),
(4, "Perfume", 54.65, false, "luxury items",  "https://images.unsplash.com/photo-1533603208986-24fd819e718a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
(5, "Fragrance", 27.99, false, "luxury items",  "https://images.unsplash.com/photo-1514557179557-9efc4d7949cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
(6, "Headache pills", 9.75, true, "medicine",  "https://images.unsplash.com/photo-1550572017-26b5655c1e8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), 
(7, "Chocolates", 11.25, false, "food",  "https://images.unsplash.com/photo-1565200003018-3ac059c15d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), 
(8, "Ambient Music", 16.49, true, "music",  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFfRDIdJTVa_7MMgpwoWgEPID7fV7DvogFKmZ8dpjZNvNoubM", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
(9, "Cologne", 18.99, false, "luxury items", "https://images.unsplash.com/photo-1554948419-1939083b12cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
(10, "Chocolates", 11.85, false, "food",  "https://images.unsplash.com/photo-1526081715791-7c538f86060e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),
(11, "Strawberries", 5.00, true, "food",  "https://southhadleyfarmersmarket.files.wordpress.com/2017/04/strawberries.jpg?w=400", "Fresh local strawberries by the pound. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), 
(12, "Blackberries", 3.00, true, "food",  "https://images.unsplash.com/photo-1457296898342-cdd24585d095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), 
(13, "Basket Mix", 4.00, true, "food",  "https://images.unsplash.com/photo-1508609504209-a18ae83c6be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "), 
(14, "Maxi Dress", 45.50, true, "Clothes",  "https://image.shopittome.com/apparel_images/fb/joie-joie-cristeta-floral-maxi-dress-abvaa98f919_zoom.jpg", "Details Silk floral printed maxi dress in cold shoulder style Cold shoulders V-neck Elbow-length sleeves Self-tie at waist Pullover style About 60 inches long."), 
(15, "Maxi Dress", 45.50, true, "Clothes",  "http://www.angelinmyarmsdolls.com/images/pic/pWuLvoES-prPvJUsC.jpg", "V-Neck, Short Sleeve, A Line Buttons Up Flowy Split, Floral Print. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

