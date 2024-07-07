import toast from "react-hot-toast";

export const fetchDeleteProductById = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }

    const data = await res.json();

    toast.success("Товар видалено", {
      id: "delete-product",
    });

    return data;
  } catch (error) {
    toast.error("Щось пішло не так", {
      id: "delete-product",
    });
    if (error instanceof Error) {
      console.error(`Error fetching product: ${error.message}`);
    } else {
      console.error("Unknown error fetching product");
    }
    throw error;
  }
};
