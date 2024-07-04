import { Counter } from "@/server/schemas/counter";

export const getNextSequence = async (
  sequenceName: string
): Promise<number> => {
  const sequenceDocument = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );

  return sequenceDocument.sequence_value;
};
