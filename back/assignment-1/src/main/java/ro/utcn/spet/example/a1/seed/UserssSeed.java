package ro.utcn.spet.example.a1.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.spet.example.a1.entity.*;
import ro.utcn.spet.example.a1.repository.*;
import ro.utcn.spet.example.a1.repository.memory.AdminRepository;

@Component
@RequiredArgsConstructor
// The Order ensures that this command line runner is ran first (before the ConsoleController)
@Order(Ordered.HIGHEST_PRECEDENCE)
public class UserssSeed implements CommandLineRunner {
	private final RepositoryFactory factory;
	private final AdminRepository adminfactory;
	private final PasswordEncoder passwordEncoder;

	@Override
	@Transactional
	public void run(String... args) throws Exception {
		UserssRepository repository = factory.createUserssRepository();
		Admin serban = new Admin(0, "serban", passwordEncoder.encode("password"));
		adminfactory.save(serban);
		if (repository.findAll().isEmpty()) {
			repository.save(new Userss( "B", "B"));
			repository.save(new Userss( "D", "D"));
			repository.save(new Userss( "F", "F"));
		}

		QuestionRepository questionRepository = factory.createQuestionRepository();
		if (questionRepository.findAll().isEmpty()) {
			questionRepository.save(new Question("Question", "you can fix it by yourself","ana","11/11/11"));
			questionRepository.save(new Question("Fixing database conection", "you can fix it by yourself","ana","11/11/11"));
			questionRepository.save(new Question( "Fixing intelij error", "C.D@example.com","maria","12/12/12"));
			questionRepository.save(new Question( "Fixing basic errors", "E.F@example.com","irina","13/13/13"));
		}
		TagRepository tagRepository = factory.createTagRepository();
		if (tagRepository.findAll().isEmpty()) {
			tagRepository.save(new Tag("dap"));
			tagRepository.save(new Tag( "nope"));
			tagRepository.save(new Tag( "silvia"));
		}
		QtagRepository QtagRepository = factory.createQtagRepository();
		if (QtagRepository.findAll().isEmpty()) {
			QtagRepository.save(new QTag(1,2));
			QtagRepository.save(new QTag( 2,3));
			QtagRepository.save(new QTag( 3,4));
		}
	}
}
