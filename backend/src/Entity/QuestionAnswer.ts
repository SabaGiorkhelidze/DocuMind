import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn  } from "typeorm";
import { Document } from "./Document";

@Entity("question_answers")
export class QuestionAnswer {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Document, (document) => document.questionAnswers)
  @JoinColumn({ name: "documentId" })
  document!: Document;

  @Column({ type: "text" })
  question!: string;

  @Column({ type: "text" })
  answer!: string;

  @Column({ type: "varchar", length: 255 })
  modelUsed!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}