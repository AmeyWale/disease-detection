import cv2
import os
from PIL import Image
import numpy as np
from sklearn.model_selection import train_test_split
from keras.utils import normalize
from keras.models import Sequential
from keras.preprocessing import image
from keras.layers import Conv2D, MaxPooling2D, Activation, Dropout, Flatten, Dense
from keras.utils import to_categorical

image_directory = 'dataset/'

MildDemented_images = os.listdir(image_directory + 'MildDemented/')
ModerateDemented_images = os.listdir(image_directory + 'ModerateDemented/')
NonDemented_images = os.listdir(image_directory + 'NonDemented/')
VeryMildDemented_images = os.listdir(image_directory + 'VeryMildDemented/')
dataset = []
label = []


INPUT_SIZE = 64

#Load and preprocess images

for i, image_name in enumerate(MildDemented_images):
    if image_name.endswith('.jpg'):
        image = cv2.imread(image_directory + 'MildDemented/' + image_name)
        image = Image.fromarray(image, 'RGB')
        image = image.resize((INPUT_SIZE, INPUT_SIZE))
        dataset.append(np.array(image))
        label.append(0)

for i, image_name in enumerate(ModerateDemented_images):
    if image_name.endswith('.jpg'):
        image = cv2.imread(image_directory + 'ModerateDemented/' + image_name)
        image = Image.fromarray(image, 'RGB')
        image = image.resize((INPUT_SIZE, INPUT_SIZE))
        dataset.append(np.array(image))
        label.append(1)

for i, image_name in enumerate(NonDemented_images):
    if image_name.endswith('.jpg'):
        image = cv2.imread(image_directory + 'NonDemented/' + image_name)
        image = Image.fromarray(image, 'RGB')
        image = image.resize((INPUT_SIZE, INPUT_SIZE))
        dataset.append(np.array(image))
        label.append(2)

for i, image_name in enumerate(VeryMildDemented_images):
    if image_name.endswith('.jpg'):
        image = cv2.imread(image_directory + 'VeryMildDemented/' + image_name)
        image = Image.fromarray(image, 'RGB')
        image = image.resize((INPUT_SIZE, INPUT_SIZE))
        dataset.append(np.array(image))
        label.append(3)

dataset = np.array(dataset)
label = np.array(label)

x_train, x_test, y_train, y_test = train_test_split(dataset, label, test_size=0.2, random_state=0)


x_test = normalize(x_test, axis=0)


model = Sequential()

model.add(Conv2D(32, (3, 3), input_shape=(INPUT_SIZE, INPUT_SIZE, 3)))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Conv2D(32, (3, 3), kernel_initializer='he_uniform'))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Conv2D(64, (3, 3), kernel_initializer='he_uniform'))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Flatten())
model.add(Dense(64))
model.add(Activation('relu'))
model.add(Dropout(0.5))
model.add(Dense(4))  
model.add(Activation('softmax')) 

model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

model.fit(x_train, y_train, batch_size=32, verbose=1, epochs=10, validation_data=(x_test, y_test), shuffle=False)

model.save('ALZHEIMER.h5')


