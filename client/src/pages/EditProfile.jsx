import React from "react";
import { Wrapper } from "./profile/profileStyle";

const EditProfile = () => {
  return (
    <Wrapper>
      <form
        action="/admin/news/import"
        method="POST"
        enctype="multipart/form-data"
        class="max-w-lg mx-auto"
      >
        {/* <!-- Title Field --> */}
        <div class="mb-4">
          <label for="title" class="block text-gray-700">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            class="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        {/* <!-- Description Field --> */}
        <div class="mb-4">
          <label for="description" class="block text-gray-700">
            Description:
          </label>
          <textarea
            name="content"
            id="content"
            required
            class="border border-gray-300 rounded p-2 w-full"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="incidentDate" class="block text-gray-700">
            {" "}
            Date:
          </label>
          <input
            type="datetime-local"
            name="created_at"
            id="created_at"
            required
            class="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div class="mb-4">
          <label for="location" class="block text-gray-700">
            Location:
          </label>
          <input
            type="text"
            name="location"
            id="location"
            required
            class="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div class="mb-4">
          <label for="image" class="block text-gray-700">
            Image:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            required
            class="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <button
          type="submit"
          class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        ></button>
      </form>
    </Wrapper>
  );
};

export default EditProfile;
