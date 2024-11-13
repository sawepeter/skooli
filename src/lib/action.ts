"use server";

import prisma from "./prisma";

type CurrentState = { success: boolean; error: boolean };

export const createSubject = async (
    currentState: CurrentState,
    data: SubjectSchema
) => {
    try {
        await prisma.subject.create({
            data: {
                name: data.name,
                teachers: {
                    connect: data.teachers.map((teacherId) => ({ id: teacherId })),
                },
            },
        });
        
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    
    }
};